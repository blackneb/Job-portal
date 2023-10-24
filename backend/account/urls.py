from django.urls import path
from .import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('me/', views.currentUser, name='currentuser'),
    path('me/update/', views.updateUser, name='updateuser'),
    path('me/upload/resume/', views.uploadResume, name='upload_resume')
]