from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Resume


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name','last_name','email','password')
        extra_kwargs = {
            'first_name':{'required': True, 'allow_blank':False},
            'last':{'required': True, 'allow_blank':False},
            'email':{'required': True, 'allow_blank':False},
            'password':{'required': True, 'allow_blank':False, 'min_length':6},
        }

class UserSerializer(serializers.ModelSerializer):
    resume = serializers.CharField(source='userprofile.resume')
    class Meta:
        model = User
        fields =('first_name', 'last_name', 'email', 'username', 'resume')

class UploadResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'