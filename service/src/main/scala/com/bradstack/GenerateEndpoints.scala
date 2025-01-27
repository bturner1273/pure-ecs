package com.bradstack

import zio.http.endpoint.openapi.OpenAPI
import zio.http.gen.openapi.EndpointGen
import zio.http.gen.scala.CodeGen

import java.nio.file.Paths
import scala.io.Source

object GenerateEndpoints extends App {
  private def generate(): Unit = {
    val file = Paths.get("openapi/json/openapi.json")
    val source = Source.fromFile(file.toFile)
    val json = source.getLines.mkString
    val spec = OpenAPI.fromJson(json)

    CodeGen.writeFiles(
      EndpointGen.fromOpenAPI(spec.toOption.get),
      basePath = Paths.get("service/src/main/scala/com/bradstack/generated"),
      basePackage = "com.bradstack",
      scalafmtPath = None,
    )
  }
  generate()
}