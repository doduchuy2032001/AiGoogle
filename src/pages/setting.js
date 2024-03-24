
function Settings() {
    return (
        <div className="bg-white w-3/4 m-auto pb-5">
            <div className="flex justify-between border-b border-black p-3">
                <p>Cấu hình thuật toán</p>
                <button className="w-20">Next</button>
            </div>
            <div className="m-4 border border-black">
                <p className="border-b border-black p-3">Cơ bản</p>
                <div className="m-4">
                    <div className="flex gap-5">
                        <div>
                            <p>Text 1</p>
                            <label class="inline-flex items-center me-5 cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                        <div>
                            <p>Text 1</p>
                            <label class="inline-flex items-center me-5 cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-5 align-middle">
                        <div>
                            <p>Thời gian tối đa</p>
                            <input className="outline-none p-2 border border-black" />
                        </div>
                        <div>
                            <p>Text 1</p>
                            <label class="inline-flex items-center me-5 cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                        <div>
                            <p>Text 1</p>
                            <label class="inline-flex items-center me-5 cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
                
                <p className="border-b border-t border-black p-3">Nâng cao</p>
                <div className="m-4">
                    <div className="flex gap-5">
                        <div>
                            <p>Thời gian tối đa</p>
                            <input className="outline-none p-2 border border-black" />
                        </div>
                        <div>
                            <p>Thời gian tối đa</p>
                            <input className="outline-none p-2 border border-black" />
                        </div>
                    </div>
                    <div className="flex gap-5 align-middle">
                        <div>
                            <p>Thời gian tối đa</p>
                            <input className="outline-none p-2 border border-black" />
                        </div>
                        <div>
                            <p>Thời gian tối đa</p>
                            <input className="outline-none p-2 border border-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;