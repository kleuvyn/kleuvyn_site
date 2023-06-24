from django.db import models


class Base(models.Model):
    criacao = models.DateTimeField(auto_created=True)
    atualizacao = models.DateTimeField(auto_now=True)
    ativo  = models.DateTimeField(default=True)

    class Meta:
        abstract = True


class Site(Base):
    titulo = models.CharField(max_length=250)
    url = models.URLField(unique=True)

    class Meta:
        verbose_name = 'site'
        verbose_name_plural  =' sites'

        def __str__(self):
            return self.titulo


class Avaliacao (Base):
    site = models.ForeignKey(Site, related_name ='avaliacoes', on_delete=models.CASCADE() )
    nome = models.CharField(max_length=250)
    email = models.EmailField()
    comentario = models.TextField(blank=True, default='')
    avaliacao = models.DecimalField(max_digits=2, decimal_places=1)

    class Meta:
        verbose_name = 'Avaliação'
        verbose_name_plural = 'Avaliação'
        unique_together = 'Avaliação'

        def __str__(self):
            return f'{self.nome} avaliou o site {self.site} com a nota {self.avaliação}'



