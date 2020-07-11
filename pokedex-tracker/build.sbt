scalaVersion := "2.13.1"
name := "pokedex-tracker"

// enablePlugins(ScalaJSPlugin)
// scalaJSUseMainModuleInitializer := false

val library = crossProject(JSPlatform, JVMPlatform).settings(
    ).jsSettings(
        libraryDependencies ++= Seq(
            "org.scala-js" %%% "scalajs-dom" % "1.0.0",
            "com.lihaoyi" %%% "scalatags" % "0.9.1"
        )
    ).jvmSettings(
        // JVM-specific settings here
    )

lazy val js = library.js

lazy val jvm = library.jvm

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0"
libraryDependencies += "com.lihaoyi" %%% "scalatags" % "0.9.1"

enablePlugins(JavaAppPackaging)
