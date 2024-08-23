from django.db import models
from django.contrib.auth.models import User
from .format import Format
from .deck import Deck

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    format = models.ForeignKey(Format, on_delete=models.SET_NULL, null=True)
    deck = models.ForeignKey(Deck, on_delete=models.SET_NULL, null=True)
    gameOver = models.BooleanField(default=False)
    body = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return self.title
