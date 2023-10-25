from rest_framework import serializers
from .models import Job, CandinatesApplied

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields= '__all__'

class CandinatesAppliedSerializer(serializers.ModelSerializer):
    job = JobsSerializer()
    class Meta:
        model = CandinatesApplied
        fields = ('user', 'resume', 'appliedAt', 'job')