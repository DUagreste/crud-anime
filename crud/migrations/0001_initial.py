# Generated by Django 4.1.7 on 2023-02-27 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CrudAnime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100)),
                ('score', models.DecimalField(decimal_places=2, default='', max_digits=5)),
                ('synopsis', models.TextField()),
                ('episodes', models.IntegerField(default='')),
                ('genres', models.CharField(default='', max_length=100)),
                ('studios', models.CharField(default='', max_length=100)),
            ],
        ),
    ]