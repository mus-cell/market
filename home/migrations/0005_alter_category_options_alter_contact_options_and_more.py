# Generated by Django 4.1.2 on 2022-10-18 10:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_alter_category_options_alter_category_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={},
        ),
        migrations.AlterModelOptions(
            name='contact',
            options={'managed': True, 'verbose_name': 'Contact', 'verbose_name_plural': 'Contact'},
        ),
        migrations.AlterModelTable(
            name='category',
            table=None,
        ),
        migrations.AlterModelTable(
            name='contact',
            table='contact',
        ),
    ]