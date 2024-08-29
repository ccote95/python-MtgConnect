from mtgconnectapi.models import Post,Comment,Format,Deck
from rest_framework.response import Response
from django.http import HttpResponseServerError
from rest_framework import serializers, status
from rest_framework.viewsets import ViewSet
from .format_view import FormatSerializer
from .deck_view import DeckSerializer

class PostSerializer(serializers.ModelSerializer):
    format = FormatSerializer()
    deck = DeckSerializer()
    class Meta:
        model= Post
        fields = ("id","user","title","format","deck","gameOver","body","date")


class PostView(ViewSet):
    def list(self,request):
        try:
            posts = Post.objects.all()
            serializer = PostSerializer(posts, many=True, context={"request":request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as ex:
            HttpResponseServerError(ex)