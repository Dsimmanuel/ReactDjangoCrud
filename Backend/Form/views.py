from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializers import *

# Create your views here.


class StudentView(APIView):
    def get(self, request):
        output = [{"stu_name":output.stu_name,
                   "department":output.department}
                   for output in Student.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer = StudentSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)