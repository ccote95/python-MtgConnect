from mtgconnectapi.models import Format
from rest_framework.response import Response
from django.http import HttpResponseServerError
from rest_framework import serializers, status
from rest_framework.viewsets import ViewSet

class FormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Format
        fields = ("id","name")

class FormatView(ViewSet):
    def list(self,request):
        try:
            formats = Format.objects.all()
            serializer = FormatSerializer(formats, many=True, context={"request":request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as ex:
            return HttpResponseServerError(ex)