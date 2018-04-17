using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class CursoMethod : CursoViewModel
    {
        public BindingGridResponse Listar(BindingGrid binGrid)
        {
            try
            {
                using (var cn = new DatabaseContext())
                {
                    //return cn.Curso.ToList();
                    binGrid.Inicializar();

                    var query = cn.Curso.ToList();


                }
            }
            catch (Exception)
            {

                throw;
            }
            return binGrid.Responde();
        }

        public void Create(List<Curso> model)
        {

        }
    }
}