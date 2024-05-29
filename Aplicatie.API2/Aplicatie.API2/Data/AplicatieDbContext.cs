using Aplicatie.API2.Models;
using Microsoft.EntityFrameworkCore;

namespace Aplicatie.API2.Data
{
    public class AplicatieDbContext : DbContext
    {
        public AplicatieDbContext(DbContextOptions <AplicatieDbContext> options) : base(options)
        {
        }

        public DbSet<Angajat> Angajati { get; set; }
    }
}
