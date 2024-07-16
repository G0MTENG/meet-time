import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useGroupNameStore = create(
  persist(
    set => ({
      groupName: '',
      setGroupName: name => set({ groupName: name }),
    }),
    {
      name: 'groupName-storage',
    },
  ),
)

// inputName과 관련된 상태와 함수를 추가합니다.
useGroupNameStore.setState({
  inputName: '',
  setInputName: name => useGroupNameStore.setState({ inputName: name }),
})

export default useGroupNameStore
