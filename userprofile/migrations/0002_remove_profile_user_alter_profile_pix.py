# Generated by Django 4.1.2 on 2022-10-25 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='User',
        ),
        migrations.AlterField(
            model_name='profile',
            name='pix',
            field=models.ImageField(default='avatar.jpg', upload_to='Profile'),
        ),
    ]
