from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from mtgconnectapi.views import DeckView,CommentView,FormatView, PostView

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'decks', DeckView, basename="deck")
router.register(r'comments',CommentView, basename="comment")
router.register(r'formats', FormatView, basename="format")
router.register(r'posts', PostView, basename="post")

urlpatterns = [
    path('', include(router.urls)),
]

