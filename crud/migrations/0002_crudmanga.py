# Generated by Django 4.1.7 on 2023-02-27 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CrudManga',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100)),
                ('score', models.DecimalField(decimal_places=2, default='', max_digits=5)),
                ('synopsis', models.TextField()),
                ('author', models.CharField(default='', max_length=100)),
                ('chapters', models.IntegerField(default='')),
                ('demographic', models.CharField(default='', max_length=100)),
                ('publisher', models.DateField()),
            ],
        ),
    ]
