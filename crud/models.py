from django.forms import *
from django.db import models

# Models here.
class Animes(models.Model):
    title = models.CharField(max_length=100, default='')
    score = models.DecimalField(max_digits=5, decimal_places=2, default='')
    synopsis = models.TextField()
    episodes = models.IntegerField(default='')
    genres = models.CharField(max_length=100, default='')
    studios = models.CharField(max_length=100, default='')

class Mangas(models.Model):
    title = models.CharField(max_length=100, default='')
    score = models.DecimalField(max_digits=5, decimal_places=2, default='')
    synopsis = models.TextField()
    author = models.CharField(max_length=100, default='')
    chapters = models.IntegerField(default='')
    demographic = models.CharField(max_length=100, default='')
    publisher = models.DateField()
