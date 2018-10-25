export class DiagnosisController{
  getAll(res){
    res.send({ express: 'Hello From Express again' });
  }

  getById(req, res){
    if (req.params.id === '0') next('route')
    else next()
  }

  search(){

  }
}
