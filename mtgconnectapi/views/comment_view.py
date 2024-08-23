from mtgconnectapi.models import Comment
from rest_framework.response import Response
from django.http import HttpResponseServerError
from rest_framework import serializers, status
from rest_framework.viewsets import ViewSet

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields=("id","post","user","body","date")

class CommentView(ViewSet):
    def list(self,request):
        try:
            comments = Comment.objects.all()
            serializer = CommentSerializer(comments, many=True, context={"request": request})
            return Response(serializer.data, status= status.HTTP_200_OK)
        except Exception as ex:
            return HttpResponseServerError(ex)
