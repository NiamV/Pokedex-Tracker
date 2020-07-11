import org.scalajs.dom
import org.scalajs.dom.document
import scala.scalajs.js.annotation.JSExport
import scala.scalajs.js.annotation.JSExportTopLevel
import org.scalajs.dom.html
import scalatags.JsDom.all._

@JSExportTopLevel("MainApp")
object MainApp{
    type PokemonID = Int

    def makeImgInputs(u: User, pokes: Array[Pokemon]): Array[org.scalajs.dom.html.Input] = {
        val inputs = new Array[org.scalajs.dom.html.Input](30)

        def getColour(caught: Boolean): String = {
            if(caught){
                return "background-color:#abffcd"
            }
            return "background-color:#ffc2ad"
        }

        var i = 0
        while(i < pokes.length){
            val id = pokes(i).id
            val c = pokes(i).caught

            val inputImage = input(
                `type`:="image",
                src:=s"https://www.cpokemon.com/pokes/home/$id.png",
                style:=getColour(c),
                height:=100,
                width:=100
            ).render

            inputImage.onclick = (e: dom.Event) => {
                val index = u.findPokemon(id)
                val p = u.getPokes
                p(index).updateCaught
                val c = p(index).caught
                inputImage.style = getColour(c)
                inputImage.height = "100"
                println(u.printPokes)
            }

            inputs(i) = inputImage
            i += 1
        }

        while(i < 30){
            inputs(i) = input(
                `type`:="image",
                src:="https://www.cpokemon.com/pokes/swsh/sprites/items/4.png"
            ).render
            i += 1
        }

        return inputs
    }

    def makeTable(u: User, pokes: Array[Pokemon]): org.scalajs.dom.html.Table = {
        val urls = makeImgInputs(u, pokes)
        return table(
            tbody(
                tr(
                    td(urls(0)),
                    td(urls(1)),
                    td(urls(2)),
                    td(urls(3)),
                    td(urls(4))
                ),
                tr(
                    td(urls(5)),
                    td(urls(6)),
                    td(urls(7)),
                    td(urls(8)),
                    td(urls(9))
                ),
                tr(
                    td(urls(10)),
                    td(urls(11)),
                    td(urls(12)),
                    td(urls(13)),
                    td(urls(14))
                ),
                tr(
                    td(urls(15)),
                    td(urls(16)),
                    td(urls(17)),
                    td(urls(18)),
                    td(urls(19))
                ),
                tr(
                    td(urls(20)),
                    td(urls(21)),
                    td(urls(22)),
                    td(urls(23)),
                    td(urls(24))
                ),
                tr(
                    td(urls(25)),
                    td(urls(26)),
                    td(urls(27)),
                    td(urls(28)),
                    td(urls(29))
                )
            )
        ).render
    }

    def renderUser(u: User, target: html.Div) = {
        val editButton = input(
            `type`:="button",
            value:="Edit Pokemon"
        ).render

        editButton.onclick = (e: dom.Event) => {
            println("Editing")
        }

        target.appendChild(editButton)
        
        var pokemon = u.getPokes().filter(_.inList())
        var i = 1

        while(!pokemon.isEmpty){
            target.appendChild( p(s"Box $i").render )
            target.appendChild(
                makeTable(u, pokemon.take(30)).render
            )

            pokemon = pokemon.drop(30)
            i += 1
        }
    }

    @JSExport
    def main(target: html.Div) = {
        println("Hi2")

        val me = Users.me
        renderUser(me, target)
    }
}