package com.bradstack

import zio._
import zio.http._
import com.bradstack.generated._

object RestApplication extends ZIOAppDefault {
  private val routes = Routes(
    Method.GET / Root -> handler(Response.text("f u")),
    Method.GET / Root / "hello-world" -> handler(Response.text("Hello, World!")),
  )

  override def run: ZIO[Any, Throwable, Nothing] = Server.serve(routes).provide(Server.defaultWith(_.port(8080)))
}