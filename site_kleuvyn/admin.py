from django.contrib import admin


from .models import Site, Avaliacao


@admin.register(Site)
class SiteAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'url',  'criacao', 'atualizacao', 'ativo')


@admin.register(Avaliacao)
class AvaliacaoAdmin(admin.ModelAdmin):
    list_display = ('site', 'nome', 'email', 'avaliacao', 'atualizacao', 'ativo')