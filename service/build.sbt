ThisBuild / version := "0.1.0-SNAPSHOT"

ThisBuild / scalaVersion := "3.5.1"

lazy val root = (project in file("."))
  .settings(
    name := "pureecs",
    libraryDependencies ++= Seq(
      "dev.zio" %% "zio" % "2.1.9",
      "dev.zio" %% "zio-http" % "3.0.0",
      "dev.zio" %% "zio-http-gen" % "3.0.1"
    )
  )
