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

                    var query = cn.Curso.Where(x => x.CurIntId != Guid.Empty); 

                    // Ordenar 
                    if (binGrid.Columna == "CurIntId") query = binGrid.Columna_Orden == "DESC"
                                                       ? query.OrderByDescending(x => x.CurIntId)
                                                       : query.OrderBy(x => x.CurIntId);

                    if (binGrid.Columna == "CursoName") query = binGrid.Columna_Orden == "DESC"
                                                       ? query.OrderByDescending(x => x.CursoName)
                                                       : query.OrderBy(x => x.CursoName);

                    // Filtrar
                    foreach (var f in binGrid.Filtros)
                    {
                        if (f.Columna == "CursoName")
                            query = query.Where(x => x.CursoName.StartsWith(f.Valor));
                    }

                    var cursos = query.Skip(binGrid.Pagina)
                                         .Take(binGrid.Limite)
                                         .ToList();

                    binGrid.SetData(
                            from Cursos in cursos
                            select new
                            {
                                Cursos.CurIntId,
                                Cursos.CursoName
                            }
                        ,
                        query.Count()
                    );
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