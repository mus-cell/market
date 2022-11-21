from django.contrib import admin
from . models import *

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_displayed = ['first_name', 'last_name', 'email', 'email', 'phone', 'address', 'state', 'nationality', 'gender', 'pix']
admin.site.register(Profile, ProfileAdmin) 