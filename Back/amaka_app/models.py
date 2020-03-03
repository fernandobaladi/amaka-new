from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    costo = models.IntegerField()
    ingrediente = models.ManyToManyField("Ingrediente")
    cantidad = models.IntegerField()
    imagen = models.TextField()
    tamano = models.TextField()
    categoria = models.ForeignKey("Categoria", on_delete=models.CASCADE)
    vendedor = models.ManyToManyField("Vendedor")
    def __str__(self):
        return self.nombre
    

class Usuario(models.Model):
    contrasena = models.CharField(max_length=20)
    email = models.EmailField(max_length=254)
    fecha_de_nacimiento = models.DateField(auto_now=False, auto_now_add=False) 
    #rol = models.ForeignKey("Rol", on_delete=models.CASCADE)
    #carrito = models.ManyToManyField("Carrito")
    #transacciones = models.ManyToManyField("Transaccion")
    def __str__(self):
        return self

class Nombre(models.Model):
    nombre = models.CharField(max_length=50)
    usuario = models.ForeignKey("Usuario", on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre

class Apellido(models.Model):
    apellido = models.CharField(max_length=50)
    usuario = models.ForeignKey("Usuario", on_delete=models.CASCADE)
    def __str__(self):
        return self.apellido

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

#class Carrito(models.Model):
#    productos = models.ManyToManyField("Producto")
#    cantidad = models.IntegerField()
#    def __str__(self):
#        return str(self.productos.nombre)

class Ingrediente(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre

class Venta(models.Model):
    productos_comprados = models.ManyToManyField("Producto")
    def __str__(self):
        return 

class Pago(models.Model):
    metodo_de_pago = models.CharField( max_length=50)
    venta = models.ForeignKey("Venta", on_delete=models.CASCADE)
    fecha = models.DateField(auto_now=False, auto_now_add=True)
    def __str__(self):
        return