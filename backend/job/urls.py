from django.urls import path
from .import views

urlpatterns = [
    path('jobs/', views.getAllJobs, name='jobs'),
    path('jobs/<str:pk>/', views.getJob, name='job'),
    path('newjob/', views.newJob, name='newjob'),
    path('updatejob/<str:pk>/', views.updateJob, name='updatejob'),
    path('deletejob/<str:pk>/', views.deleteJob, name='deletejob'),
    path('stats/<str:topic>/', views.getTopicStatus, name='topicstatus'),
    path('jobs/<str:pk>/apply/', views.applyToJob, name='apply_to_job'),
    path('me/jobs/applied/', views.getCurrentUserAppliedJobs, name='current_user_applied_jobs'),
    path('jobs/<str:pk>/check/', views.isApplied, name='is_applied'),
    path('me/jobs/', views.getCurrentUserJobs, name='get_current_user_jobs'),
    path('jobs/<str:pk>/candinates',views.getCandinatedApplied,name='get_candinates_applied')
]