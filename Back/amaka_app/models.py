from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    costo = models.IntegerField()
    ingrediente = models.ManyToManyField("Ingrediente")
    cantidad = models.IntegerField()
    imagen = models.TextField()
    tamano = models.TextField()
    vendedor = models.ManyToManyField("Vendedor")
    def __str__(self):
        return self.nombre
    

class Usuario(models.Model):
    contrasena = models.CharField(max_length=20)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    fecha_de_nacimiento = models.DateField(auto_now=False, auto_now_add=False) 
    def __str__(self):
        return self.nombre

class Cliente(models.Model):
    usuario = models.ForeignKey("Usuario", on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre

class Vendedor(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    telefono = models.CharField(max_length=11)  
    proveedor = models.ForeignKey("Proveedor", on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre

class Proveedor(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre

class Ingrediente(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre

class Venta(models.Model):
    cliente = models.ForeignKey("Cliente", on_delete=models.CASCADE)
    isPago = models.BooleanField()
    productos_comprados = models.ManyToManyField("Producto")
    def __str__(self):
        return self.nombre

class Pago(models.Model):
    metodo_de_pago = models.CharField( max_length=50)
    venta = models.ForeignKey("Venta", on_delete=models.CASCADE)
    fecha = models.DateField(auto_now=False, auto_now_add=True)
    def __str__(self):
        return self.nombre