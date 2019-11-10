from rest_framework import serializers
from .models import Lead


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = [
            'name',
            'email',
            'message',
            'created_at',
        ]
