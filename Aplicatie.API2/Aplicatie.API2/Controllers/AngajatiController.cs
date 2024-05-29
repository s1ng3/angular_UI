using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Aplicatie.API2.Models;
using Aplicatie.API2.Data;
using Microsoft.EntityFrameworkCore;

namespace Aplicatie.API2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AngajatiController : Controller
    {
        private readonly AplicatieDbContext _aplicatieDbContext;
        public AngajatiController(AplicatieDbContext aplicatieDbContext)
        {
            _aplicatieDbContext = aplicatieDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAngajati()
        {
            var angajati = await _aplicatieDbContext.Angajati.ToListAsync();
            return Ok(angajati);
        }

        [HttpPost]
        public async Task<IActionResult> AddAngajat([FromBody] Angajat angajatRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            angajatRequest.Id = Guid.NewGuid();
            await _aplicatieDbContext.Angajati.AddAsync(angajatRequest);
            await _aplicatieDbContext.SaveChangesAsync();

            return Ok(angajatRequest);
        }


    }
}