from django.contrib import admin
from .models import Producto, Usuario, Cliente ,Vendedor, Proveedor, Ingrediente, Venta, Pago
# Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    list_display=('nombre', 'cantidad', 'costo')

class UsuarioAdmin(admin.ModelAdmin):
    list_display=('nombre', 'apellido', 'email')

class VendedorAdmin(admin.ModelAdmin):
    list_display=('nombre', 'apellido', 'proveedor')


admin.site.register(Producto, ProductoAdmin)
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Cliente)
admin.site.register(Vendedor, VendedorAdmin)
admin.site.register(Proveedor)
admin.site.register(Ingrediente)
admin.site.register(Venta)
admin.site.register(Pago)