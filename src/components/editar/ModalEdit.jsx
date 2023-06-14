import { useStoreEdited } from '../../store/storeEdit'

export const ModalEdit = () => {
  const { modal, current } = useStoreEdited(state => ({ modal: state.modal, current: state.currentLoc }))
  const { ModalClose } = useStoreEdited()

  return (
    <>
      <div className={`modal fixed top-1/4 left-0 z-[1055] w-full h-full outline-none fade ${!modal && 'hidden'}`} id='exampleModalTwo' tabIndex='-1' role='dialog'>
        <div className='relative w-auto pointer-events-none max-w-lg my-8 mx-auto px-4 sm:px-0' role='document'>
          <div className='relative flex flex-col w-full pointer-events-auto bg-white border border-gray-300 rounded-lg'>
            <div className='flex items-start justify-between p-4 border-b border-gray-300 rounded-t'>
              <h5 className='mb-0 text-lg leading-normal'>Modal title</h5>
              <button type='button' className='close' data-dismiss='modal' onClick={ModalClose}>&times;</button>
            </div>
            <div className='relative flex p-4'>
              ... {current.id}
            </div>
            <div className='flex items-center justify-end p-4 border-t border-gray-300'>
              <button onClick={ModalClose} type='button' className='inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-gray-600 mr-2' data-dismiss='modal'>Close</button>
              <button type='button' className='inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-blue-600'>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
