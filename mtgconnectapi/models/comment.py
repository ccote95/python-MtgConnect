from django.db import models
from django.contrib.auth.models import User
from .post import Post
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return f'Comment by {self.user.fullName} on {self.post.title}'
