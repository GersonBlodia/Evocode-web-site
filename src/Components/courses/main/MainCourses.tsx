'use client'
import { useState } from "react"
import { ChevronRight, GraduationCap } from "lucide-react"
 
 
export  function MainCourses() {
  
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const courses = [
    {
      title: "Artes y humanidades",
      university: "Universidad de Newcastle, Australia",
      degree: "Licenciado en letras",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      title: "Negocios y gestión",
      university: "Universidad de Rockingham",
      degree: "Maestría en Administración de Empresas (MBA)",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      title: "Cuidado de la salud",
      university: "Universidad de Rockingham",
      degree: "MBA en Gestión Sanitaria",
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      title: "Análisis de datos",
      university: "Universidad de Huddersfield",
      degree: "Maestría en Inteligencia Artificial",
      image: "https://picsum.photos/400/300?random=4",
    },
    {
      title: "Psicología",
      university: "Universidad Brunel de Londres",
      degree: "Máster en Ciencias Psicológicas",
      image: "https://picsum.photos/400/300?random=5",
    },
    {
      title: "Ingeniería",
      university: "Universidad Brunel de Londres",
      degree: "Maestría en Gestión de Operaciones",
      image: "https://picsum.photos/400/300?random=6",
    },
  ]

  const handleOpenModal = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCourse(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <main className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grados en línea</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Aprenda de manera flexible con nuestros cursos de grado en línea creados por las principales universidades.
            Desde la licenciatura hasta el posgrado, haga que el aprendizaje a nivel de grado funcione para usted y
            lleve su carrera al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <aside className="md:col-span-3 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Premios</h2>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-600 hover:underline cursor-pointer">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Todos los premios (165)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Licenciatura (18)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Certificado de Educación Superior (1)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Diploma de Educación Superior (1)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Maestría (129)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Certificado de posgrado (16)
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Temas</h2>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-600 hover:underline cursor-pointer">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Todas las materias (169)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contabilidad y Finanzas (6)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Artes y humanidades (17)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Administración y empresa (48)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Criminología (2)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Análisis de datos (7)
                </li>
                <li className="flex items-center text-gray-600 hover:text-blue-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Mostrar más
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Organizaciones</h2>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-600 hover:underline cursor-pointer">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Todas las organizaciones (169)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Universidad Arden (21)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Universidad Brunel de Londres (8)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Universidad de Coventry (29)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Universidad Central de Queensland (5)
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Escuela de Administración Canberra (1)
                </li>
                <li className="flex items-center text-gray-600 hover:text-blue-600">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Mostrar más
                </li>
              </ul>
            </div>
          </aside>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white shadow-md overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{course.university}</p>
                    <p className="text-sm text-gray-500 mb-4">{course.degree}</p>
                    <div className="flex flex-col items-start">
                      <span className="text-sm mb-2 flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        Maestría
                      </span>
                      <button
                        
                        className="bg-pink-600 text-white px-6 py-2 text-sm hover:bg-pink-700 transition-colors w-full"
                      >
                        Saber más
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}

