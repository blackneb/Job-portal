from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from django.db.models import Avg, Count, Min, Max
from rest_framework.pagination import PageNumberPagination
import json

from django.contrib.auth.hashers import make_password
from .serializers import SignUpSerializer, UserSerializer, UploadResumeSerializer
from .models import Resume
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
# Create your views here.

@api_view(['POST'])
def register(request):
    data = request.data
    user = SignUpSerializer(data=data)
    if user.is_valid():
        if not User.objects.filter(username=data['email']).exists():
            user = User.objects.create(
                first_name = data['first_name'],
                last_name = data['last_name'],
                email = data['email'],
                username = data['email'],
                password = make_password(data['password'])
            )
            return Response({
                'Message':'User Registered'
                },
                status=status.HTTP_200_OK
            )
        else:
            return Response({
                'error':'User already exists'
                },
                status=status.HTTP_400_BAD_REQUEST
            )
    else:
        return Response(user.errors)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def currentUser(request):
    user = UserSerializer(request.user)
    resume = Resume.objects.all()
    resumeserializer = UploadResumeSerializer(resume, many=True)
    username = user.data['username']
    user_data = user.data
    if Resume.objects.filter(name=username).exists():
        resume_data = [item["file"] for item in resumeserializer.data if item["name"] == username]
        user_data['resume'] = resume_data[0]
    else:
        user_data['resume'] = ''
    return Response(user_data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def updateUser(request):
    user = request.user
    data = request.data
    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])
    user.save()
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def uploadResume(request):
    user = UserSerializer(request.user)
    file_obj = request.data.get('resume')
    username = user.data['username']
    print(username)
    if Resume.objects.filter(name=username).exists():
        return Response({
            'message': 'Resume has been uploaded'
        },
        status=status.HTTP_400_BAD_REQUEST)

    if not file_obj:
        return Response({'error': 'Resume is required.'}, status=status.HTTP_400_BAD_REQUEST)

    file_instance = Resume.objects.create(name=username, file=file_obj)
    file_instance.save()

    serializer = UploadResumeSerializer(file_instance)
    return Response(serializer.data, status=status.HTTP_201_CREATED)





# def uploadResume(request):
#     user = request.user
#     resume = request.FILES['resume']

#     if resume == '':
#         return Response({
#             'error': 'Please Upload your resume.'
#         })
    
#     user.userprofile.resume = resume
#     user.userprofile.save()
#     serializer = UserSerializer(user, many=False)
#     return Response(serializer.data)