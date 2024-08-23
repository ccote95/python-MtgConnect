from mtgconnectapi.models import Deck
from rest_framework.response import Response
from django.http import HttpResponseServerError
from rest_framework import serializers, status
from rest_framework.viewsets import ViewSet

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model=Deck
        fields= ('id','name')

class DeckView(ViewSet):
    def list(self,request):
        try:
            decks = Deck.objects.all()
            serializer = DeckSerializer(decks, many=True, context={"request": request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as ex:
            return HttpResponseServerError(ex)