from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Job, CandinatesApplied
from .serializers import JobsSerializer, CandinatesAppliedSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from django.db.models import Avg, Count, Min, Max
from .filters import JobsFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from account.models import Resume
from account.serializers import UploadResumeSerializer, UserSerializer

# Create your views here.

@api_view(['GET'])
def getAllJobs(request):
    filterset = JobsFilter(request.GET, queryset=Job.objects.all().order_by('id'))
    count = filterset.qs.count()
    #pagination
    resPerPage = 3
    paginator = PageNumberPagination()
    paginator.page_size = resPerPage

    queryset = paginator.paginate_queryset(filterset.qs, request)
    
    serializer = JobsSerializer(queryset, many=True)
    return Response({
        'count':count,
        'resPerPage': resPerPage,
        'jobs':serializer.data
        })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getJob(request,pk):
    job = get_object_or_404(Job,id=pk)
    serializer = JobsSerializer(job, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def newJob(request):
    request.data['user'] = request.user
    data = request.data
    serializer = JobsSerializer(data=data)
    if(serializer.is_valid()):
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.error)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateJob(request,pk):
    job = get_object_or_404(Job, id=pk)
    if job.user != request.user:
        return Response({
            'message':'You can not update this job'
        },
        status=status.HTTP_403_FORBIDDEN
        )
    job.title = request.data['title']
    job.description = request.data['description']
    job.email = request.data['email']
    job.address = request.data['address']
    job.jobType = request.data['jobType']
    job.education = request.data['education']
    job.industry = request.data['industry']
    job.experience = request.data['experience']
    job.salary = request.data['salary']
    job.company = request.data['company']
    job.positions = request.data['positions']
    job.save()
    serializer = JobsSerializer(job, many=False)
    return Response(serializer.data)
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteJob(request, pk):
    job = get_object_or_404(Job, id=pk)
    if job.user != request.user:
        return Response({
            'message':'You can not delete this job'
        },
        status=status.HTTP_403_FORBIDDEN
        )
    job.delete()
    return Response({'message': 'Job is deleted'}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTopicStatus(request,topic):
    args = { 'title__icontains':topic }
    jobs = Job.objects.filter(**args)
    if len(jobs) == 0:
        return Response({'message':'Not status found for {topic}'.format(topic=topic)})
    stats = jobs.aggregate(
        total_jobs = Count('title'),
        avg_positions = Avg('positions'),
        avg_salary = Avg("salary"),
        min_salary = Min("salary"),
        max_salary = Max("salary"),
    )
    return Response(stats)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def applyToJob(request,pk):
    user = request.user
    job = get_object_or_404(Job, id=pk)
    mainuser = UserSerializer(request.user)
    username = mainuser.data['username']
    resume = Resume.objects.all()
    resumeserializer = UploadResumeSerializer(resume, many=True)
    if not Resume.objects.filter(name=username).exists():
        return Response({
            'error': 'please upload your resume'
        },
        status=status.HTTP_400_BAD_REQUEST
        )
    if job.lastDate < timezone.now():
        return Response({
            'error': 'You can not apply to this job. The Job is expired'
        },
        status=status.HTTP_400_BAD_REQUEST
        )
    alreadyApplied = CandinatesApplied.objects.filter(job_id=job.id, user_id = user.id).exists()
    if alreadyApplied:
        return Response({
            'error': 'You have already applied to this job'
        },
        status=status.HTTP_400_BAD_REQUEST
        )

    resume_data = [item["file"] for item in resumeserializer.data if item["name"] == username]
    jobApplied = CandinatesApplied.objects.create(
        job = job,
        user = user,
        resume = resume_data[0]
    )
    return Response({
        'applied': True,
        'jobId': jobApplied.id
    },
    status=status.HTTP_200_OK
    )

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCurrentUserAppliedJobs(request):
    args = { 'user_id': request.user.id }
    jobs = CandinatesApplied.objects.filter(**args)
    serializer = CandinatesAppliedSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def isApplied(request, pk):
    user = request.user
    job = get_object_or_404(Job, id=pk)
    applied = CandinatesApplied.objects.filter(job_id=job.id, user_id = user.id).exists()
    return Response(applied)