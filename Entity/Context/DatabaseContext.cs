using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;


namespace Entity
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
            :base("name=BdConexion")
        {
        }
        public virtual DbSet<Alumno> Alumno { get; set; }
        public virtual DbSet<Curso> Curso { get; set; }


    }
}
