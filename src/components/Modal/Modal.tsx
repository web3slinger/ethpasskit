import React, { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export interface ModalProps {
  children: ReactNode
  title: string
  isActive: boolean
  onClose: () => void
  disableClose?: boolean
}

const Modal = ({ children, title, isActive, onClose, disableClose = false }: ModalProps) => {
  return (
    <Transition.Root show={isActive} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-50"
        onClose={() => {
          disableClose ? null : onClose()
        }}
      >
        <div className="flex items-end sm:items-center justify-center h-screen w-screen">
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700/20 transition-opacity" />
          </Transition.Child>

          {/* Content */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white text-gray-700 rounded-t-xl sm:rounded-xl shadow-xl transform transition-all w-full sm:max-w-sm px-6 py-8">
              <div className="flex items-center justify-between select-none mb-6">
                <button className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out invisible">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <div className="text-lg font-medium">{title}</div>
                <button
                  className={`opacity-50 hover:opacity-100 hover:text-indigo-600 transition duration-300 ease-in-out ${
                    disableClose ? 'invisible' : 'visible'
                  }`}
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {children}
              <a
                className="flex items-center justify-center text-xs gap-1 mt-6"
                href="https://ethpass.xyz/"
                target="_blank"
              >
                <span className="opacity-50">powered by</span>
                <svg
                  className="w-12"
                  fill="none"
                  viewBox="0 0 148 41"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.966 19.118a6.22 6.22 0 0 0-.308-1.98 4.579 4.579 0 0 0-.88-1.65 4.02 4.02 0 0 0-1.518-1.1c-.601-.279-1.305-.418-2.112-.418-1.57 0-2.808.447-3.718 1.342-.894.895-1.466 2.163-1.716 3.806h10.252ZM5.604 22.396c.088 1.159.294 2.163.616 3.014.323.836.748 1.533 1.276 2.09a5.199 5.199 0 0 0 1.87 1.232c.734.264 1.54.396 2.42.396.88 0 1.636-.103 2.266-.308a10.117 10.117 0 0 0 1.672-.682c.484-.25.902-.477 1.254-.682.367-.205.719-.308 1.056-.308.455 0 .792.169 1.012.506l1.562 1.98a9.298 9.298 0 0 1-2.024 1.782c-.748.47-1.532.85-2.354 1.144-.806.279-1.635.477-2.486.594a17.57 17.57 0 0 1-2.442.176c-1.57 0-3.028-.257-4.378-.77a9.997 9.997 0 0 1-3.52-2.31c-.997-1.027-1.782-2.288-2.354-3.784-.572-1.51-.858-3.256-.858-5.236 0-1.54.25-2.985.748-4.334.499-1.364 1.21-2.545 2.134-3.542.939-1.012 2.076-1.811 3.41-2.398 1.35-.587 2.868-.88 4.554-.88 1.423 0 2.736.227 3.938.682a8.51 8.51 0 0 1 3.102 2.002c.866.865 1.54 1.936 2.024 3.212.499 1.261.748 2.706.748 4.334 0 .821-.088 1.379-.264 1.672-.176.279-.513.418-1.012.418H5.604Zm26.633 10.956c-1.965 0-3.476-.55-4.532-1.65-1.041-1.115-1.562-2.647-1.562-4.598V14.498h-2.31a1.06 1.06 0 0 1-.748-.286c-.205-.19-.308-.477-.308-.858v-2.156l3.63-.594 1.144-6.16c.074-.293.213-.52.418-.682.206-.161.47-.242.792-.242h2.816v7.106h6.028v3.872h-6.028V26.73c0 .704.169 1.254.506 1.65.352.396.829.594 1.43.594.338 0 .616-.037.836-.11.235-.088.433-.176.594-.264.176-.088.33-.169.462-.242a.71.71 0 0 1 .396-.132c.162 0 .294.044.396.132.103.073.213.19.33.352l1.628 2.64a8.225 8.225 0 0 1-2.728 1.496c-1.026.337-2.09.506-3.19.506Zm14.281-20.504a11.798 11.798 0 0 1 2.904-2.002c1.056-.513 2.296-.77 3.718-.77 1.232 0 2.325.213 3.278.638.954.41 1.746.997 2.376 1.76.646.748 1.13 1.65 1.452 2.706.338 1.041.506 2.193.506 3.454V33h-5.434V18.634c0-1.379-.315-2.442-.946-3.19-.63-.763-1.59-1.144-2.882-1.144-.938 0-1.818.213-2.64.638-.82.425-1.598 1.005-2.332 1.738V33h-5.434V.308h5.434v12.54Z"
                    fill="#4F46E5"
                  ></path>
                  <path
                    d="M71.354 27.148c.616.748 1.284 1.276 2.002 1.584a6.074 6.074 0 0 0 2.376.462c.822 0 1.562-.154 2.222-.462a4.27 4.27 0 0 0 1.672-1.408c.47-.63.829-1.423 1.078-2.376.25-.968.374-2.105.374-3.41 0-1.32-.11-2.435-.33-3.344-.205-.924-.506-1.672-.902-2.244-.396-.572-.88-.99-1.452-1.254-.557-.264-1.195-.396-1.914-.396-1.129 0-2.09.242-2.882.726-.792.47-1.54 1.137-2.244 2.002v10.12Zm-.286-13.64a11.774 11.774 0 0 1 3.146-2.53c1.174-.645 2.552-.968 4.136-.968 1.232 0 2.354.257 3.366.77 1.027.513 1.907 1.261 2.64 2.244.748.968 1.32 2.17 1.716 3.608.411 1.423.616 3.058.616 4.906 0 1.687-.227 3.249-.682 4.686-.454 1.437-1.107 2.684-1.958 3.74a8.972 8.972 0 0 1-3.058 2.486c-1.188.587-2.522.88-4.004.88-1.261 0-2.339-.19-3.234-.572a8.073 8.073 0 0 1-2.398-1.628v9.24H65.92V10.428h3.322c.704 0 1.166.33 1.386.99l.44 2.09Zm31.784 9.856c-1.569.073-2.89.213-3.96.418-1.07.19-1.928.44-2.574.748-.645.308-1.107.667-1.386 1.078-.279.41-.418.858-.418 1.342 0 .953.279 1.635.836 2.046.572.41 1.313.616 2.222.616 1.115 0 2.075-.198 2.882-.594.821-.41 1.621-1.027 2.398-1.848v-3.806ZM90.4 13.574c2.596-2.376 5.72-3.564 9.372-3.564 1.32 0 2.501.22 3.542.66a7.303 7.303 0 0 1 2.64 1.804c.719.763 1.261 1.68 1.628 2.75.381 1.07.572 2.244.572 3.52V33h-2.464c-.513 0-.909-.073-1.188-.22-.279-.161-.499-.477-.66-.946l-.484-1.628a21.38 21.38 0 0 1-1.672 1.364c-.543.381-1.107.704-1.694.968a8.631 8.631 0 0 1-1.892.594c-.66.147-1.393.22-2.2.22a8.904 8.904 0 0 1-2.64-.374 5.935 5.935 0 0 1-2.09-1.166 5.186 5.186 0 0 1-1.364-1.914c-.322-.763-.484-1.65-.484-2.662 0-.572.096-1.137.286-1.694.19-.572.499-1.115.924-1.628.44-.513 1.005-.997 1.694-1.452.69-.455 1.533-.85 2.53-1.188 1.012-.337 2.186-.609 3.52-.814 1.335-.22 2.86-.352 4.576-.396v-1.32c0-1.51-.323-2.625-.968-3.344-.645-.733-1.577-1.1-2.794-1.1-.88 0-1.613.103-2.2.308a8.584 8.584 0 0 0-1.518.704c-.44.25-.843.477-1.21.682a2.314 2.314 0 0 1-1.188.308c-.381 0-.704-.095-.968-.286a2.627 2.627 0 0 1-.638-.704l-.968-1.738Zm36.644 1.254c-.147.235-.301.403-.462.506-.161.088-.367.132-.616.132-.264 0-.55-.073-.858-.22a25.245 25.245 0 0 0-1.034-.484 8.604 8.604 0 0 0-1.364-.506c-.499-.147-1.093-.22-1.782-.22-1.071 0-1.914.227-2.53.682-.601.455-.902 1.049-.902 1.782 0 .484.154.895.462 1.232.323.323.741.609 1.254.858.528.25 1.122.477 1.782.682.66.19 1.327.403 2.002.638a20.14 20.14 0 0 1 2.024.814c.66.293 1.247.675 1.76 1.144a4.983 4.983 0 0 1 1.254 1.65c.323.645.484 1.423.484 2.332 0 1.085-.198 2.09-.594 3.014a6.489 6.489 0 0 1-1.716 2.376c-.763.66-1.709 1.18-2.838 1.562-1.115.367-2.405.55-3.872.55-.777 0-1.54-.073-2.288-.22a13.072 13.072 0 0 1-2.134-.572 12.434 12.434 0 0 1-1.892-.88 9.388 9.388 0 0 1-1.518-1.1l1.254-2.068c.161-.25.352-.44.572-.572.22-.132.499-.198.836-.198.337 0 .653.095.946.286.308.19.66.396 1.056.616.396.22.858.425 1.386.616.543.19 1.225.286 2.046.286.645 0 1.195-.073 1.65-.22.469-.161.851-.367 1.144-.616.308-.25.528-.535.66-.858.147-.337.22-.682.22-1.034 0-.528-.161-.96-.484-1.298-.308-.337-.726-.63-1.254-.88-.513-.25-1.107-.47-1.782-.66a106.42 106.42 0 0 1-2.046-.66 22.068 22.068 0 0 1-2.046-.814 7.488 7.488 0 0 1-1.782-1.21 5.662 5.662 0 0 1-1.254-1.782c-.308-.704-.462-1.555-.462-2.552 0-.924.183-1.804.55-2.64a6.15 6.15 0 0 1 1.606-2.178c.719-.63 1.606-1.13 2.662-1.496 1.071-.381 2.303-.572 3.696-.572 1.555 0 2.97.257 4.246.77 1.276.513 2.339 1.188 3.19 2.024l-1.232 1.958Zm19.336 0c-.147.235-.301.403-.462.506a1.28 1.28 0 0 1-.616.132c-.264 0-.55-.073-.858-.22a25.888 25.888 0 0 0-1.034-.484 8.604 8.604 0 0 0-1.364-.506c-.499-.147-1.093-.22-1.782-.22-1.071 0-1.914.227-2.53.682-.602.455-.902 1.049-.902 1.782 0 .484.154.895.462 1.232.322.323.74.609 1.254.858.528.25 1.122.477 1.782.682.66.19 1.327.403 2.002.638a20.14 20.14 0 0 1 2.024.814c.66.293 1.246.675 1.76 1.144a4.983 4.983 0 0 1 1.254 1.65c.322.645.484 1.423.484 2.332 0 1.085-.198 2.09-.594 3.014a6.512 6.512 0 0 1-1.716 2.376c-.763.66-1.709 1.18-2.838 1.562-1.115.367-2.406.55-3.872.55-.778 0-1.54-.073-2.288-.22a12.39 12.39 0 0 1-4.026-1.452 9.388 9.388 0 0 1-1.518-1.1l1.254-2.068c.161-.25.352-.44.572-.572.22-.132.498-.198.836-.198.337 0 .652.095.946.286.308.19.66.396 1.056.616.396.22.858.425 1.386.616.542.19 1.224.286 2.046.286.645 0 1.195-.073 1.65-.22.469-.161.85-.367 1.144-.616.308-.25.528-.535.66-.858a2.58 2.58 0 0 0 .22-1.034c0-.528-.162-.96-.484-1.298-.308-.337-.726-.63-1.254-.88-.514-.25-1.108-.47-1.782-.66a106.42 106.42 0 0 1-2.046-.66 21.848 21.848 0 0 1-2.046-.814 7.488 7.488 0 0 1-1.782-1.21 5.63 5.63 0 0 1-1.254-1.782c-.308-.704-.462-1.555-.462-2.552 0-.924.183-1.804.55-2.64a6.138 6.138 0 0 1 1.606-2.178c.718-.63 1.606-1.13 2.662-1.496 1.07-.381 2.302-.572 3.696-.572 1.554 0 2.97.257 4.246.77 1.276.513 2.339 1.188 3.19 2.024l-1.232 1.958Z"
                    className="fill-[#111827]"
                  ></path>
                </svg>
              </a>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
