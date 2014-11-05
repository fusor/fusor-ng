require 'bastion'

module FusorNg
  class Engine < ::Rails::Engine
    isolate_namespace FusorNg

    initializer 'fusor-ng.mount_engine', :after => :build_middleware_stack do |app|
      app.routes_reloader.paths << "#{FusorNg::Engine.root}/config/mount_engine.rb"
    end

    initializer "fusor-ng.assets", :group => :all do |app|
      SETTINGS[:roles] = {
        :assets => {
          :precompile => [
            'fusor-ng/fusor-ng.js'
          ]
        }
      }
    end

    config.to_prepare do
      Bastion.register_plugin({
         :name => 'fusor-ng',
         :javascript => 'fusor-ng/fusor-ng',
         :pages => %w[hostgroups]
       })
    end

  end
end
