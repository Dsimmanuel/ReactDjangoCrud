from django.db import models

# Create your models here.

class Student(models.Model):
    stu_name = models.CharField(max_length=30)
    department = models.CharField(max_length=30)
