class Pokemon(id: Int){
    def getURL = {
        s"https://www.cpokemon.com/pokes/home/$id.png"
    }

    def id(): Int = id

    var isCaught: Boolean = false

    def caught(): Boolean = isCaught
    def updateCaught(): Unit = {
        isCaught = !isCaught
    }

    var isInList: Boolean = true

    def inList(): Boolean = isInList
    def updateInList(): Unit = {
        isInList = !isInList
    }
}

class User{
    val ids = (1 to 50).toArray

    val pokes: Array[Pokemon] = ids.map(new Pokemon(_))
    def getPokes(): Array[Pokemon] = pokes

    def findPokemon(id: Int): Int = {
        var index = 0
        while(pokes(index).id != id){
            index += 1
        }
        return index
    }

    def printPokes(): String = {
        var output = ""
        for(p <- pokes.filter(_.inList())){
            output += p.id.toString
            output += ": "
            output += p.caught.toString
            output += ", "
        }
        return output
    }
}

class ImmutablePokemon(id: Int) extends Pokemon(id){
    override def updateCaught(): Unit = {
        isCaught = isCaught
    }

    override def updateInList(): Unit = {
        isInList = isInList
    }
}

class ImmutableUser extends User{
    val masterPokes: Array[ImmutablePokemon] = ids.map(new ImmutablePokemon(_))
}

object Users{
    val masterUser = new ImmutableUser()
    val me = new User()
}