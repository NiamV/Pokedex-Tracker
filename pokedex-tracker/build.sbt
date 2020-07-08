scalaVersion := "2.13.1"
name := "pokedex-tracker"

enablePlugins(ScalaJSPlugin)
scalaJSUseMainModuleInitializer := false

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0"
libraryDependencies += "com.lihaoyi" %%% "scalatags" % "0.9.1"

enablePlugins(JavaAppPackaging)