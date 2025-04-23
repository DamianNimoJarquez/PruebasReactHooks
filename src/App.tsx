import EffectsTutorial from "./assets/hooks/useeffects/EffectsTutorial"
import ImperativeHandleTutorial from "./assets/hooks/useimperativehandles/ImperativeHandleTutorial"
import LayoutEffectTutorial from "./assets/hooks/useLayoutEffects/LayoutEffectTutoria"
import ReduceTutorial from "./assets/hooks/usereduces/ReduceTutorial"
import RefsTutorial from "./assets/hooks/useRefs/RefsTutorial"
import StateTutorial from "./assets/hooks/usestates/StateTutorial"


function App() {

  return (
    <>
    <h1 className="bg-blue-400 text-3xl text-center text-yellow-200 dark:bg-gray-800 dark:text-white m-2 p-2 rounded-ee-full rounded-es-full">Pruebas Para los Hooks</h1>
    <StateTutorial />
    <ReduceTutorial />
    <EffectsTutorial />
    <RefsTutorial />
    <LayoutEffectTutorial />
    <ImperativeHandleTutorial />
    </>
  )
}

export default App
