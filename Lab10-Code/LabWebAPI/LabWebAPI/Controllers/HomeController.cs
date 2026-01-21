using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace LabWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static List<Product> products = new()
        {
            new() { Id = 69, Name = "Long Sleeve Shirt", Price = 3000 },
            new() { Id = 75, Name = "Half Sleeve Shirt", Price = 2500 }
        };

        [HttpGet]
        public IActionResult GetProducts() => Ok(products);

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = products.FirstOrDefault(p => p.Id == id);
            return product == null ? NotFound() : Ok(product);
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] CreateProductDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var product = new Product { Id = products.Max(p => p.Id) + 1, Name = dto.Name, Price = dto.Price };
            products.Add(product);
            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] CreateProductDto dto)
        {
            var product = products.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();
            product.Name = dto.Name;
            product.Price = dto.Price;
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = products.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();
            products.Remove(product);
            return NoContent();
        }
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    public class CreateProductDto
    {
        [Required(ErrorMessage = "Name required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Price required")]
        [Range(0.01, double.MaxValue)]
        public decimal Price { get; set; }
    }
}
