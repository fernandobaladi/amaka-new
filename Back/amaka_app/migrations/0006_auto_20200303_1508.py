# Generated by Django 3.0.2 on 2020-03-03 19:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('amaka_app', '0005_auto_20200207_2105'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('metodo_de_pago', models.CharField(max_length=50)),
                ('fecha', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isPago', models.BooleanField()),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='amaka_app.Cliente')),
            ],
        ),
        migrations.RenameModel(
            old_name='Rol',
            new_name='Proveedor',
        ),
        migrations.RemoveField(
            model_name='transaccion',
            name='productos',
        ),
        migrations.RenameField(
            model_name='proveedor',
            old_name='rol',
            new_name='nombre',
        ),
        migrations.RemoveField(
            model_name='producto',
            name='categoria',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='carrito',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='rol',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='transacciones',
        ),
        migrations.RemoveField(
            model_name='vendedor',
            name='compania',
        ),
        migrations.AddField(
            model_name='producto',
            name='vendedor',
            field=models.ManyToManyField(to='amaka_app.Vendedor'),
        ),
        migrations.AddField(
            model_name='vendedor',
            name='proveedor',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='amaka_app.Proveedor'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='producto',
            name='cantidad',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='producto',
            name='tamano',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='contrasena',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='vendedor',
            name='telefono',
            field=models.CharField(max_length=11),
        ),
        migrations.DeleteModel(
            name='Carrito',
        ),
        migrations.DeleteModel(
            name='Categoria',
        ),
        migrations.DeleteModel(
            name='Compania',
        ),
        migrations.DeleteModel(
            name='Tamano',
        ),
        migrations.DeleteModel(
            name='Transaccion',
        ),
        migrations.AddField(
            model_name='venta',
            name='productos_comprados',
            field=models.ManyToManyField(to='amaka_app.Producto'),
        ),
        migrations.AddField(
            model_name='pago',
            name='venta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='amaka_app.Venta'),
        ),
        migrations.AddField(
            model_name='cliente',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='amaka_app.Usuario'),
        ),
    ]
