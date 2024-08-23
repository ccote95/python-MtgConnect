from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from mtgconnectapi.views.users import UserViewSet
from mtgconnectapi.views import DeckView,CommentView,FormatView, PostView,register_user, login_user

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'users', UserViewSet, basename='user')
router.register(r'decks', DeckView, basename="deck")
router.register(r'comments',CommentView, basename="comment")
router.register(r'formats', FormatView, basename="format")
router.register(r'posts', PostView, basename="post")

urlpatterns = [
    path('', include(router.urls)),
    path('register', register_user),
    path('login', login_user),
]

