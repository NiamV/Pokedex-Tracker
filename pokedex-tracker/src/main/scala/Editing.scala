import org.scalajs.dom
import org.scalajs.dom.document
import scala.scalajs.js.annotation.JSExport
import scala.scalajs.js.annotation.JSExportTopLevel
import org.scalajs.dom.html
import scalatags.JsDom.all._

@JSExportTopLevel("Editing")
object Editing{
    
    @JSExport
    def main(target: html.Div) = {
        println("Editing Time!!!")
        println(Users.me.printPokes())
    }
}