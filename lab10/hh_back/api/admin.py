from django.contrib import admin

from django.contrib import admin
from .models import Company, Vacancy


class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name', 'city']


class VacancyAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'salary']  
    list_filter = ['company']  


admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)