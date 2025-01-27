package com.bradstack.generated

import com.bradstack.generated.component._

object {
import zio.http._
import zio.http.endpoint._
import zio.http.codec._
val SayHello=Endpoint(Method.GET / "")
  
  
  .in[Unit]
  
  .outError[Unit](status = Status.InternalServerError)


}