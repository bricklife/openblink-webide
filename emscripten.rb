MRuby::Build.new('emscripten') do |conf|
  toolchain :clang

  # Compiler settings
  conf.cc.command = 'emcc'
  conf.cxx.command = 'em++'
  conf.linker.command = 'emcc'
  conf.archiver.command = 'emar'

  # Optimization settings
  conf.cc.flags << '-O3'
  conf.cc.flags << '-flto'

  # Linker settings
  conf.linker.flags << '-s ALLOW_MEMORY_GROWTH=1'
  conf.linker.flags << '-s FORCE_FILESYSTEM=1'
  conf.linker.flags << '-s INVOKE_RUN=0'
  conf.linker.flags << '-s EXPORTED_FUNCTIONS=["_main","_malloc","_free"]'
  conf.linker.flags << '-s EXPORTED_RUNTIME_METHODS=["stringToUTF8","setValue","FS"]'
  
  exts.executable = '.js'

  # mrbc
  conf.gem core: 'mruby-bin-mrbc'

  conf.build_mrbc_exec
  conf.disable_libmruby
  conf.disable_presym
end
